import { Box } from "@chakra-ui/react";
const Footer = () => (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
        2023 Realtor
        ©
          <script>
              document.write(new Date().getFullYear());
          </script>
          , made with ❤️ by
          <a href="https://www.linkedin.com/in/yosser-chaftar-888168227/">CHAFTAR YOSSER</a>
    </Box>
)

export default Footer;