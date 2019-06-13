register() {
    const { username, password, isAdmin } = this.state;
    axios
      .post('/auth/register', { username, password, isAdmin })
      .then(user => {
        this.setState({ username: '', password: '' });
        this.props.updateUser(user.data);
      })
      .catch(err => {
        this.setState({ username: '', password: '' });
        alert(err.response.request.response);
      })
  
    login() {
        const { username, password } = this.state;
        axios
        .post('/auth/login', { username, password })
        .then(user => {
            this.props.updateUser(user.data);
            this.setState({ username: '', password: '' });
        })
        .catch(err => alert(err.response.request.response));
    }

}