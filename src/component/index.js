import React from 'react';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class PersonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            person_data: [],
            isInEditMode: false
        }
        this.changeContent = this.changeContent.bind(this);
    }

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    changeContent(newContent) {
        this.setState({
            person_data: newContent
        });
    }

    handleClick(e) {
        const content = e.target.innerHTML;
        this.props.onClick(content);
    }

    componentDidMount() {
        axios.get(`https://reqres.in/api/users?page=2`)
            .then(response => this.setState(() => ({
                person_data: response.data.data
            }))
            )
    }

    updateComponentValue = () => {
        this.setState ({
            isInEditMode : false,
            value: this.refs.theTextInput.value
        })
    }

    renderEditView =() =>{
        return <div>
        <input 
            type="text"
            defaultValue={this.state.person_data[0] && this.state.person_data[0].first_name}
            ref= "theTextInput"
        />
      <EditIcon onClick={this.changeEditMode} />
      <button onClick={this.updateComponentValue}>Ok</button>
    </div>
    }

    renderDefaultView = () => {
        return <div>
        <ul>
            <li>
                <p onDoubleClick={this.changeEditMode}>{this.state.person_data[0] && this.state.person_data[0].first_name} {this.state.person_data[0] && this.state.person_data[0].last_name}</p>
                <DeleteIcon onClick={this.changeContent} />
            </li>
        </ul>
    </div>
    }

    render() {
        return (
            <div>
                {this.state.isInEditMode ?
                    this.renderEditView() : this.renderDefaultView() 
                }
                <ul>
                    <li>
                        <p>{this.state.person_data[1] && this.state.person_data[1].first_name} {this.state.person_data[1] && this.state.person_data[1].last_name}</p>
                        <DeleteIcon />
                        <EditIcon onClick={this.handleClick} />
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>{this.state.person_data[2] && this.state.person_data[2].first_name} {this.state.person_data[2] && this.state.person_data[2].last_name}</p>
                        <DeleteIcon />
                        <EditIcon />
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>{this.state.person_data[3] && this.state.person_data[3].first_name} {this.state.person_data[3] && this.state.person_data[3].last_name}</p>
                        <DeleteIcon />
                        <EditIcon />
                    </li>
                </ul>

                <ul>
                    <li>
                        <p>{this.state.person_data[4] && this.state.person_data[4].first_name} {this.state.person_data[4] && this.state.person_data[4].last_name}</p>
                        <DeleteIcon />
                        <EditIcon />
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>{this.state.person_data[5] && this.state.person_data[5].first_name} {this.state.person_data[5] && this.state.person_data[5].last_name}</p>
                        <DeleteIcon />
                        <EditIcon />
                    </li>
                </ul>
            </div>
        )
    }
}