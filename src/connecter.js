((global)=>{
    const oviceConnecterClass = () => {
        let data = {
            getTitle: document.title,
            getUrl: document.URL,
            getUserName: document?.getElementById('userName')?.value ?? 'anonymous',
            getNewChatMessage: Number(document?.querySelector('div#chat-button > span.counter')?.textContent),
            hasLogout: !!document?.querySelector('#leave-openspace-block'),
            hasOpenspace: !!document?.querySelector('#leave-room-block'),
            hasLeave: !!document?.querySelector('#leave-openspace-block') || !!document?.querySelector('#leave-room-block'),
            hasCoffee: !!document?.querySelector('#away-block'),
        }
        data.getChatMessage = () => {
              messageList = [];
              document.querySelectorAll('div#chat-scroll > div').forEach((el) => {
                const data = {
                    name: el?.querySelector('.name')?.textContent || '',
                    message: el?.querySelector('.break-space')?.textContent.trim() || '',
                    time: el?.querySelector('.time-message')?.textContent.trim() || ''
                };
                messageList.push(data);
              });
              return messageList;
        };
        const screenshare_ele = document?.querySelector('#screenshare-block > div')
        if (screenshare_ele) {
            data = { ...data, ...{
                hasScreenshare: true,
                screenshareState:
                    !!screenshare_ele?.querySelector('i.bar-device-on'),
            }
            }
        } else {
            const eleList = document?.querySelectorAll('.dynamic-object-element')
            if (eleList) {
                eleList.forEach((ele) => {
                    if (!ele) return
                    if (
                        ele?.querySelector('img')?.['src']?.includes('screenshare')
                    ) {
                        data = { ...data,...{
                            hasScreenshare: true,
                            screenshareState:
                                !!ele?.querySelector('i.bar-device-on'),
                        }}
                    }
                })
            } else {
                data = { ...data,...{
                    hasScreenshare: false,
                    screenshareState: false,
                }}
            }
        }
        const mic_ele = document?.querySelector('#mic-block > div')
        if (mic_ele) {
            if (mic_ele.querySelector('.bar-device-off')) {
                data = { ...data,...{
                    hasMic: true,
                    micState: false,
                }}
            }
            if (mic_ele.querySelector('.bar-device-on')) {
                data = { ...data,...{
                    hasMic: true,
                    micState: true,
                }}
            }
        }
        data.leave = () => {
            const ele = document?.querySelector(
                '#leave-openspace-block'
            )
            if (ele) {
                ele['click']()
            }
            const ele2 =
                document?.querySelector(
                    '#leave-room-block'
                )
            if (ele2) {
                ele2['click']()
            }
        };
        data.rest = () => {
            const ele =
                document?.querySelector('#away-block')
            if (ele) {
                ele['click']()
            }
        };
        data.screenShare = () => {
            const ele = document?.querySelector(
                '#screenshare-block > div'
            )
            if (ele) {
                ele['click']()
            } else {
                const eleList = document?.querySelectorAll(
                    '.dynamic-object-element'
                )
                if (eleList) {
                    eleList.forEach((ele) => {
                        if (ele?.querySelector('img')) {
                            if (
                                [
                                    ...ele?.querySelectorAll(
                                        'img'
                                    ),
                                ].filter((item) =>
                                    item?.['src']?.includes(
                                        'screenshare'
                                    )
                                ).length !== 0
                            ) {
                                ele['click']()
                            }
                        }
                    })
                }
            }
        };
        data.mic = () => {
            const ele = document?.querySelector('#mic-block > div')
            if (ele) {
                ele['click']()
            }
        };
        return data;
    };
    global.oviceConnecter = oviceConnecterClass;
})(window);
