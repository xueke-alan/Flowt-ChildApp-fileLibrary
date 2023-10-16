const wujie: any = {}

if (window["$wujie"]) {
    const $ = window["$wujie"]
    wujie.props = $.props
    wujie.bus = $.bus
} else {
    console.log('非基座环境');
    wujie.props = {}
    wujie.bus = {
        $on: () => { },
        $emit: () => { }
    }
}


export default wujie