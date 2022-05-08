((global)=>{
    const oviceConnecterClass = () => {
        let data = {
            ovice_tab_title: document.title,
            ovice_has_logout: !!document?.querySelector('#leave-openspace-block'),
            ovice_has_openspace: !!document?.querySelector('#leave-room-block'),
            ovice_has_coffee: !!document?.querySelector('#away-block'),
        }
        const screenshare_ele = document?.querySelector('#screenshare-block > div')
        if (screenshare_ele) {
            data = { ...data, ...{
                ovice_has_screenshare: true,
                ovice_screenshare_on:
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
                            ovice_has_screenshare: true,
                            ovice_screenshare_on:
                                !!ele?.querySelector('i.bar-device-on'),
                        }}
                    }
                })
            } else {
                data = { ...data,...{
                    ovice_has_screenshare: false,
                    ovice_screenshare_on: false,
                }}
            }
        }
        const mic_ele = document?.querySelector('#mic-block > div')
        if (mic_ele) {
            if (mic_ele.querySelector('.bar-device-off')) {
                data = { ...data,...{
                    ovice_has_mic: true,
                    ovice_mic_on: false,
                }}
            }
            if (mic_ele.querySelector('.bar-device-on')) {
                data = { ...data,...{
                    ovice_has_mic: true,
                    ovice_mic_on: true,
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
    global.oviceConnecter = oviceConnecterClass();
})(window);
