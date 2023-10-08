const wujie: any = {}

if (window["$wujie"]) {
    const $ = window["$wujie"]
    wujie.props = $.props
    wujie.bus = $.bus
}


export default wujie 