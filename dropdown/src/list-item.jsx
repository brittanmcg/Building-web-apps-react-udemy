var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <li><a href="http://www.brittanmcginnis.com">{this.props.item}</a></li>
    }
});
