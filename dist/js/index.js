var settings = {
    onclick: function (text, value, menuId) {
        console.log('menubar click test');
    },
    items: [{
        text: '编辑',
        value: '',
        icon: {
            url: '../image/bom16.png',
            class: '../'
        },
        // panel-big small popup-small
        style: 'small',
        // defaultItem类型
        children: [{
            text: '打印1',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'big',
            // defaultItem类型
            children: [{
                text: '打印1-1',
                value: '',
                icon: {
                        url: '../image/bom16.png',
                        class: '../'
                    },
                    // panel-big small popup-small
                style: 'small',
                    // defaultItem类型
                children: [

                    ],
                onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
            }, {
                    text: '打印1-2',
                    value: '',
                    icon: {
                        url: '../image/bom16.png',
                        class: '../'
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印1-3',
                    value: '',
                    icon: {
                        url: '../image/bom16.png',
                        class: '../'
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-3 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印1-4',
                    value: '',
                    icon: {
                        url: '../image/bom16.png',
                        class: '../'
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-4 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印1-5',
                    value: '',
                    icon: {
                        url: '../image/bom16.png',
                        class: '../'
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-5 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }

            ],
            onclick: function (text, value, menuId) {
                console.log('menubar item 打印1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
            }
        }, {
            text: '打印2',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [{
                text: '打印2-1',
                value: '',
                icon: {
                        url: '../image/bom16.png',
                        class: '../'
                    },
                    // panel-big small popup-small
                style: 'small',
                    // defaultItem类型
                children: [],
                onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
            }, {
                    text: '打印2-2',
                    value: '',
                    icon: {
                        url: '../image/bom16.png',
                        class: '../'
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印2-3',
                    value: '',
                    icon: {
                        url: '../image/bom16.png',
                        class: '../'
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-3 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印2-4',
                    value: '',
                    icon: {
                        url: '../image/bom16.png',
                        class: '../'
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [{
                        text: '打印2-4-1',
                        value: '',
                        icon: {
                                url: '../image/bom16.png',
                                class: '../'
                            },
                            // panel-big small popup-small
                        style: 'small',
                            // defaultItem类型
                        children: [],
                        onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                    }, {
                            text: '打印2-4-2',
                            value: '',
                            icon: {
                                url: '../image/bom16.png',
                                class: '../'
                            },
                            // panel-big small popup-small
                            style: 'small',
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }, {
                            text: '打印2-4-3',
                            value: '',
                            icon: {
                                url: '../image/bom16.png',
                                class: '../'
                            },
                            // panel-big small popup-small
                            style: 'small',
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-3 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }, {
                            text: '打印2-4-4',
                            value: '',
                            icon: {
                                url: '../image/bom16.png',
                                class: '../'
                            },
                            // panel-big small popup-small
                            style: 'small',
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-4 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }, {
                            text: '打印2-4-5',
                            value: '',
                            icon: {
                                url: '../image/bom16.png',
                                class: '../'
                            },
                            // panel-big small popup-small
                            style: 'small',
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-5 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-4 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印2-5',
                    value: '',
                    icon: {
                        url: '../image/bom16.png',
                        class: '../'
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-5 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }

            ],
            onclick: function (text, value, menuId) {
                console.log('menubar item 打印2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
            }
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印',
        value: '',
        icon: {
            url: '../image/bom16.png',
            class: '../'
        },
        // panel-big small popup-small
        style: 'small',
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印',
        value: '',
        icon: {
            url: '../image/bom16.png',
            class: '../'
        },
        // panel-big small popup-small
        style: 'small',
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印',
        value: '',
        icon: {
            url: '../image/bom16.png',
            class: '../'
        },
        // panel-big small popup-small
        style: 'small',
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }]

};

console.log('debugger');
$('#menubar').menubar(settings);