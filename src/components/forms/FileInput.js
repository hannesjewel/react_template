import React from 'react'

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

    renderError = ({error, touched}) => {
        if(error && touched){
            return(
                <small className="_error-message" role="alert">
                    {error}
                </small>
            )
        }
    }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render() {
    const { name, meta, label, img, video, pdf } = this.props
    const className = `_form-group ${meta.error && meta.touched ? 'w_error' : ''}`

    return (
        <div className={className}>
            <label>{label}</label>
            <input type="file" name={name} className="_form-element" onChange={this.onChange} />
            {this.renderError(meta)}
            {img && <img src={img} alt="" style={{
              marginTop: '15px',
              width: '400px',
              maxWidth: '100%',
              border: '1px solid #ccc'
            }} />}
            {video && (
              <video title="video" playsInline controls style={{
                marginTop: '15px',
                width: '400px'
              }}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {pdf && <a href={pdf} target="_blank"  without rel="noreferrer" style={{textDecoration: 'underline'}}>View PDF</a>}
        </div>
    )
  }
}

export default FileInput