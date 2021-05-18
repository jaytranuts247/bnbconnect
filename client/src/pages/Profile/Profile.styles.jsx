import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  margin: 20px auto;
  /* padding: 0 80px; */

  .profile-header {
    display: flex;
    flex-direction: column;
    width: 100%;

    h1 {
      font-size: 28px;
      margin-bottom: 20px;
      font-weight: 700;
      color: #222;
    }

    .intro-details {
      font-size: 16px;
      font-weight: 400;

      p {
        margin: 0 0 20px 0;
      }
    }

    .intro-container {
      display: flex;
      flex-direction: column;
      label {
        font-size: 16px;
        font-weight: 600;
        margin: 10px 0 15px 0;
      }
      textarea {
        padding: 8px;
        max-width: 100%;
      }
      textarea:focus-visible {
        outline: 1px solid #222;
      }
      .edit-btn {
        display: flex;
        button:last-child {
          margin-left: 15px;
        }
      }
    }
  }
`;
