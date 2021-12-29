import "./write.css";

export default function Post(){
    return(
        <div className="post">
            <form className="postform">
                <div className="postFormGroup">
                    <label htmlFor="fileInput">
                        <i class="fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="postInput" autoFocus={true}/>
                </div>
            </form>
        </div>               

            
            


    )

}