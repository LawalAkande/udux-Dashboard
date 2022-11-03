import styled from "styled-components";

export const MainHeader = styled.header`
  background-color: #0f0f0f !important;
  display: flex;
  align-items: center;
  padding: 20px;
  height: 90px;
`;

export const StyledMainBody = styled.div`
  margin-top: 90px;
  padding: 0 10px;
`;

export const MainBody = styled.div`
  border-top: 1px solid #282828;
  border-right: 1px solid #282828;
  border-left: 1px solid #282828;
  padding: 3px;
`;

export const MainHeaderArrowStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const InputDivStyle = styled.div`
  border: 1px solid #282828 !important;
  width: 500px;
  display: flex;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-left: 50px;

  input {
    width: 80%;
    border: none !important;
    border-radius: 5px;
    padding: 0 20px;
    background-color: #0f0f0f !important;
    color: #fff;
  }

  input:focus {
    outline: none;
  }

  input:hover {
    outline: none;
  }
`;

export const MainBodyTopImage = styled.img`
  width: 100%;
`;

export const PlayList = styled.div`
  padding: 30px;
  color: "#fff" !important;
`;
