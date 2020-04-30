import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { addLocaleData, IntlProvider } from 'react-intl'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' 
import './App.css';
import RaportowanieForm from './raportowanieLasera/components/RaportowanieForm'
import ErrorBoundary from './tools/ErrorBoundary'
import { messagesOf } from './tools/i18nConfig'

class App extends Component {
  render() {
    const parsedUrl = new URL(window.location.href)
    const lang = parsedUrl.searchParams.get("lang") || "pl"

    return (
      <ErrorBoundary>
        <IntlProvider locale={lang} messages={messagesOf(lang)}>
          <div className="App">
            <RaportowanieForm />
            <ToastContainer
              position={toast.POSITION.TOP_RIGHT}
              closeOnClick={false}
              autoClose={6000}
              hideProgressBar={true}
            />
          </div>
        </IntlProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
