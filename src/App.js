import React, { Component } from "react";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Header from "./components/Header";
import contactsOperations from "./redux/contacts/contacts-operations";

import s from "./App.module.css";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Header />
        <section className={s.section}>
          <div className={s.container}>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />

            <ContactList />
          </div>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
