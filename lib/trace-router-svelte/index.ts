export const useNavigate = (route) => (e) => {
  e.preventDefault();
  route.navigate();
};
