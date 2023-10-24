import {Component} from 'react'

class UserDetails extends Component {
    state = {"username": "", "fbProfileLink": "", "instaProfileLink": "", "twitterProfileLink": "", "inputMissing":false}

    onSubmitForm = event => {
        console.log('submit triggered')
        event.preventDefault();
        const {username, fbProfileLink, instaProfileLink, twitterProfileLink, inputMissing} = this.state
        if (fbProfileLink === "" && instaProfileLink === "" && twitterProfileLink === ""){
            this.setState({inputMissing: true})
            return
        }
        this.setState({inputMissing: false})

    }
    onChangeUserInput = event => {
        console.log('userinput changes triggered')
        const id = event.target.id
        switch(id){
            case "username":
                this.setState({"username": event.target.value})
                break
            case "fbProfileLink":
                this.setState({"fbProfileLink": event.target.value})
                break
            case "instaProfileLink":
                this.setState({"instaProfileLink": event.target.value})
                break
            case "twitterProfileLink":
                this.setState({"twitterProfileLink": event.target.value})
                break
        }
        console.log(this.state)

    }

    render(){
        const {username, fbProfileLink, instaProfileLink, twitterProfileLink, inputMissing} = this.state
        return(
            <form onSubmit={this.onSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input onChange={this.onChangeUserInput} type="text" className="form-control" id="username" value={username} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="fbProfileLink" className="form-label">Facebook Profile Link</label>
                    <input onChange={this.onChangeUserInput} type="text" className="form-control" id="fbProfileLink" value={fbProfileLink}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="instaProfileLink" className="form-label">Instagram Profile Link</label>
                    <input onChange={this.onChangeUserInput} type="text" className="form-control" id="instaProfileLink" value={instaProfileLink}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="twitterProfileLink" className="form-label">Twitter Profile Link</label>
                    <input onChange={this.onChangeUserInput} type="text" className="form-control" id="twitterProfileLink" value={twitterProfileLink}  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                {inputMissing === true ? <p>Please Provide alteast one Social Link</p>: null}
            </form>
        )
    }
}

export default UserDetails