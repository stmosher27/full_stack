import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_id:  this.props.currentUser.id,
                   post_id: this.props.post.id,
                   body: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //
  // componentWillUpdate(nextProps) {
  //   debugger
  //   if (nextProps.params.userId !== this.props.params.userId) {
  //     this.props.fetchUser(nextProps.params.userId);
  //   }
  // }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = this.state;
    this.props.createComment(comment).then(
      this.props.fetchAllPosts().then(
        this.setState({body: ''})
      )
    );
  }

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit} >
          <div className="comment-form">
            <textarea
                   placeholder="Comment"
                   value={this.state.body}
                   onChange={this.update("body")}
                   className="comment-body"/>
            <input type="submit" value="Create Comment" />
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
