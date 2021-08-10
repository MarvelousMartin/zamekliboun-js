import "tailwindcss/tailwind.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { appWithTranslation } from "next-i18next";
import { Layout } from "components/layouts/Layout";
import { Provider } from "next-auth/client";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default appWithTranslation(MyApp);