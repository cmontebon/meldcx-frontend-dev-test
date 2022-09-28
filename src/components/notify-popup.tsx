import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import { AuthContext } from "../contexts/auth.context";

import { ApiService } from "../services";

import { Button, Input } from "./";

type NotifyPopupProps = {
  close: () => void;
};

const Container = styled.div`
  position: absolute;
  top: -100px;
  right: 0;
  left: 0;
  bottom: 0;
  height: 330px;
  width: 500px;
  margin: auto;
  border: 1px solid #d4d4d4;
  padding: 20px;
  background: #fff;
  z-index: 10;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  display: flex;
  flex-direction: column;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: auto;
  height: 50px;
`;

const ContentSection = styled.div`
  flex: 1;
`;

const NotifyPopup = ({ close }: NotifyPopupProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [repoUrl, setRepoUrl] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { logout } = useContext(AuthContext);

  const handleSubmit = () => {
    const payload = {
      name,
      email,
      repoUrl,
      message,
    };

    setLoading(true);
    ApiService.notify(payload)
      .then((response) => {
        setLoading(false);
        toast("Notication sent.");
        close();
      })
      .catch((error) => {
        setLoading(false);
        const statusCode = error.response.status;
        if (statusCode === 401) {
          logout();
        }
        console.log(error);
      });
  };

  return (
    <Container>
      <ContentSection>
        <h1>Notify</h1>
        <Input width="98%" placeholder="Name" value={name} setValue={setName} />
        <Input
          width="98%"
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <Input
          width="98%"
          placeholder="Repository URL"
          value={repoUrl}
          setValue={setRepoUrl}
        />
        <Input
          width="98%"
          placeholder="Message"
          value={message}
          setValue={setMessage}
        />
      </ContentSection>
      <ActionButtonsContainer>
        <Button text="Close" width="100%" onClick={close} />
        <Button
          className="primary"
          text="Notify"
          width="100%"
          onClick={handleSubmit}
          isLoading={loading}
        />
      </ActionButtonsContainer>
    </Container>
  );
};

export default NotifyPopup;
