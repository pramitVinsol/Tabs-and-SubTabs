import { Component } from 'react';
import Tab from './Tab';
import SubTab from './SubTab';
import TabContent from './TabContent';

const tabs = [
    {
        id: 'tab-1',
        name: 'Introduction',
        subTabs: [
            {   
                id: 't1-st1', 
                name: 'what is react.js', 
                content: 'React is the most popular front-end JavaScript library in the field of web development. It is used by large, established companies and newly-minted startups alike (Netflix, Airbnb, Instagram, and the New York Times, to name a few). React brings many advantages to the table, making it a better choice than other frameworks like Angular.js.' 
            },
            {   id: 't1-st2', 
                name: 'Getting started', 
                content: 'When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up! As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. ' 
            }
        ]
    },
    {
        id: 'tab-2',
        name: 'The instance',
        subTabs: [
            {   id: 't2-st1', 
                name: 'Creating a instance', 
                content: 'When the app is running, we may have several instances of this component on screen, each with its own properties and local state. This is the traditional object-oriented UI programming.' 
            },
            {   id: 't2-st2', 
                name: 'Data and methods', 
                content: 'Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.' 
            },
            {   id: 't2-st3', 
                name: 'Instance lifecycle hooks', 
                content: 'Each component has several “lifecycle methods” that you can override to run code at particular times in the process. You can use this lifecycle diagram as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.'
            }
        ]
    },
    {
        id: 'tab-3',
        name: 'List rendering',
        subTabs: [
            {   id: 't3-st1', 
                name: 'Mapping an array to elements', 
                content: 'A map is a data collection type where data is stored in the form of pairs. It contains a unique key. The value stored in the map must be mapped to the key. We cannot store a duplicate pair in the map(). It is because of the uniqueness of each stored key.' 
            }
        ]
    },
];

class Tabs extends Component {

    constructor(){
        super();
        this.state = {
            activeSubTab: 't1-st1',
            activeTab: 'tab-1',
            heading: 'Introduction',
        };
    };

    tabClickHandler = (event, tab, subTab) => {
        // event.stopPropagation();
        this.setState({ activeTab: tab.id, activeSubTab: subTab.id, heading: tab.name });
    }

    subTabClickHandler = (event, { id }) => {
        event.stopPropagation();
        this.setState({ activeSubTab: id });
    };

    activeTabHandler = (activeTab, { id }) => {
        return activeTab === id;
    };

    formatContent = (content = {}) => {
        tabs.map(tab => {
            return tab.subTabs.map(subTab => (
                content = { ...content, [subTab.name]: { activeSubTab: subTab.id, value: subTab.content } }
            ));
        });

        return content;
    };

    renderTabs = () => {
        return tabs.map(tab => (
            <Tab activeClass={this.activeTabHandler(this.state.activeTab, tab) ? 'active' : null} key={tab.id} tabName={tab.name} clicked={(event) => this.tabClickHandler(event, tab, tab.subTabs[0])}>
                {tab.subTabs.map(subTab => (
                    this.activeTabHandler(this.state.activeTab, tab) ? <SubTab activeClass={this.activeTabHandler(this.state.activeSubTab, subTab) ? 'active' : null} key={subTab.id} subTabName={subTab.name} clicked={(event) => this.subTabClickHandler(event, subTab)}/> : null
                ))}
            </Tab>
        ));
    };

    renderTabContent = () => {
        let content = this.formatContent();
        if (Object.keys(content).length > 0) {
            return Object.keys(content).map(item => (
                this.state.activeSubTab === content[item].activeSubTab ? <TabContent key={content[item]} content={content[item].value} heading={item}/> : null
            ));
        }
    };

    render() {
        return (
            <>
                <div className="tabs">
                    {this.renderTabs()}
                </div>
                <div className="tabs-content">
                    <h1>{this.state.heading}</h1>
                    {this.renderTabContent()}
                </div>
            </>
        )
    }
};

export default Tabs;