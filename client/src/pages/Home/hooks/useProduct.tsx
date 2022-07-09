import { useNavigate } from "react-router-dom";
export const useProduct = () => {
  const navigate = useNavigate();
  const handleCallBackForProduct = (keyValue: string) => {
    let url = "/";

    switch (keyValue) {
      case "web":
        url = "/web";
        break;

      case "rest":
        url = "/rest";
        break;

      case "gerWeb":
        url = "/gerWeb";
        break;

      default:
        break;
    }

    navigate(url);
  };

  return handleCallBackForProduct;
};
