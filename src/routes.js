import paths from "./constants/paths";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default {
  DEFAULT: {
    component: Login,
    route: paths.DEFAULT,
  },
  SIGN_UP: {
    component: SignUp,
    route: paths.SIGN_UP,
  },
};
