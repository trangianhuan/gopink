(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[397],{7685:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return u}});var a=l(3552),n=l(7294),s=l(7198),i=l(5444),r=l(1496),c=function(e){function t(t){var l;return(l=e.call(this,t)||this).state={skillType:"skill_1"},l}(0,a.Z)(t,e);var l=t.prototype;return l.choiceSkill=function(e){this.setState({skillType:e})},l.render=function(){var e=this;return n.createElement(i.i1,{query:"213837227",render:function(t){var l=t.allImageSharp.edges.find((function(t){return t.node.fluid.originalName===e.props.imgName})),a=e.props.post?e.props.post.skill_1:{},s=e.props.post?e.props.post.skill_2:{},i=e.props.post?e.props.post.skill_3:{},c=e.props.post?e.props.post.skill_4:{};return l?"skill_thumb"==e.props.type?n.createElement("div",null,n.createElement("div",{className:"d-flex mb-4 justify-content-around"},n.createElement("div",{className:"skill_1"==e.state.skillType?"skill1 active":"skill1",style:{backgroundImage:"url("+l.node.fluid.src+")"},onClick:function(){return e.choiceSkill("skill_1")}}),n.createElement("div",{className:"skill_2"==e.state.skillType?"skill2 active":"skill2",style:{backgroundImage:"url("+l.node.fluid.src+")"},onClick:function(){return e.choiceSkill("skill_2")}}),n.createElement("div",{className:"skill_3"==e.state.skillType?"skill3 active":"skill3",style:{backgroundImage:"url("+l.node.fluid.src+")"},onClick:function(){return e.choiceSkill("skill_3")}}),n.createElement("div",{className:"skill_4"==e.state.skillType?"skill4 active":"skill4",style:{backgroundImage:"url("+l.node.fluid.src+")"},onClick:function(){return e.choiceSkill("skill_4")}})),n.createElement("div",null,"skill_1"==e.state.skillType&&a.data.map((function(e,t){return n.createElement("div",{key:t,className:0===t?"skill_first":"skill_detail"},e)})),"skill_2"==e.state.skillType&&s.data.map((function(e,t){return n.createElement("div",{key:t,className:0===t?"skill_first":"skill_detail"},e)})),"skill_3"==e.state.skillType&&i.data.map((function(e,t){return n.createElement("div",{key:t,className:0===t?"skill_first":"skill_detail"},e)})),"skill_4"==e.state.skillType&&c.data.map((function(e,t){return n.createElement("div",{key:t,className:0===t?"skill_first":"skill_detail"},e)})))):n.createElement(r.Z,{className:e.props.className?e.props.className:"",fluid:l.node.fluid}):null}})},t}(n.Component),o=l(8552),m=l(3004),u=function(e){function t(t){var l;return(l=e.call(this,t)||this).state={type_1:"",type_2:"",melee_1:"",melee_2:"",posts:o.D,currentPost:{}},l.handleChange=l.handleChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(l)),l}(0,a.Z)(t,e);var l=t.prototype;return l.choicePost=function(e){this.setState({currentPost:e})},l.filterPost=function(e,t){this.setState({currentPost:{}});var l=o.D,a=this,n="type_1"==e?t:a.state.type_1,s="type_2"==e?t:a.state.type_2,i="melee_1"==e?t:a.state.melee_1,r="melee_2"==e?t:a.state.melee_2;n&&(l=l.filter((function(e){return e.type_1==n}))),s&&(l=l.filter((function(e){return e.type_2==s}))),i&&(l=l.filter((function(e){return e.melee_1==i}))),r&&(l=l.filter((function(e){return e.melee_2==r}))),this.setState({posts:l})},l.handleChange=function(e){var t,l=e.target.id;this.setState(((t={})[l]=e.target.value,t)),this.filterPost(l,e.target.value)},l.render=function(){var e=this;return n.createElement(s.Z,null,n.createElement(m.Z,null),n.createElement("div",{className:"m-auto main"},n.createElement("div",{className:"bg-white my-2 p-4"},n.createElement("div",{className:"row"},n.createElement("label",null,"Phái:"),n.createElement("div",{className:"col-6 mb-4"},n.createElement("select",{className:"form-select",defaultValue:"all",id:"type_1",value:this.state.type_1?this.state.type_1:" ",onChange:this.handleChange},n.createElement("option",{value:""}),n.createElement("option",{value:"Tà Phái"},"Tà Phái"),n.createElement("option",{value:"Chính Phái"},"Chính Phái"),n.createElement("option",{value:"Trung Lập"},"Trung Lập"))),n.createElement("div",{className:"col-6 mb-4"},n.createElement("select",{className:"form-select",defaultValue:"all",id:"type_2",value:this.state.type_2?this.state.type_2:" ",onChange:this.handleChange},n.createElement("option",{value:""}),n.createElement("option",{value:"Ngoại Công"},"Ngoại Công"),n.createElement("option",{value:"Nội Công"},"Nội Công"),n.createElement("option",{value:"Thân Pháp"},"Thân Pháp")))),n.createElement("div",{className:"row"},n.createElement("label",null,"Tầm đánh:"),n.createElement("div",{className:"col-6 mb-4"},n.createElement("select",{className:"form-select",defaultValue:"all",id:"melee_1",value:this.state.melee_1?this.state.melee_1:" ",onChange:this.handleChange},n.createElement("option",{value:""}),n.createElement("option",{value:"Cận Chiến"},"Cận Chiến"),n.createElement("option",{value:"Tầm Xa"},"Tầm Xa"))),n.createElement("div",{className:"col-6 mb-4"},n.createElement("select",{className:"form-select",defaultValue:"all",id:"melee_2",value:this.state.melee_2?this.state.melee_2:" ",onChange:this.handleChange},n.createElement("option",{value:""}),n.createElement("option",{value:"Khống Chế"},"Khống Chế"),n.createElement("option",{value:"Tấn Công"},"Tấn Công"),n.createElement("option",{value:"Hỗ Trợ"},"Hỗ Trợ"),n.createElement("option",{value:"Phòng Ngự"},"Phòng Ngự")))),n.createElement("hr",null),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-3 skill_area"},this.state.posts.map((function(t,l){return n.createElement("div",{key:l,className:e.state.currentPost.name==t.name?"p-2 border-bottom hero-item active":"p-2 border-bottom hero-item",onClick:function(){return e.choicePost(t)}},t.name)}))),n.createElement("div",{className:"col-9 py-2"},n.createElement("div",{className:"d-flex"},n.createElement("div",null,n.createElement(c,{className:"skill-thumb",imgName:this.state.currentPost.avatar})),n.createElement("div",{className:"p-4"},n.createElement("div",{className:"skill_description"},this.state.currentPost.description),n.createElement("hr",null),n.createElement(c,{className:"skill-thumb-test d-flex",type:"skill_thumb",post:this.state.currentPost,imgName:this.state.currentPost.img_thumb_skill}),n.createElement("hr",null),n.createElement("div",{className:"text-center fw-bold"},this.state.currentPost.melee_1," - ",this.state.currentPost.melee_2))))))))},t}(n.Component)}}]);
//# sourceMappingURL=component---src-templates-game-tmc-js-bdd2aa0dbfc2af3ef710.js.map