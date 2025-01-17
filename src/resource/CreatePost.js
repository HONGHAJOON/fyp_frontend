import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import '../css/CreatePost.css';

const CreatePost = () => {
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*, video/*', // 이미지와 영상 파일 허용
        onDrop: (acceptedFiles) => {
            const previewFiles = acceptedFiles.map(file => ({
                file,
                preview: URL.createObjectURL(file), // 미리보기 URL 생성
            }));
            setFiles([...files, ...previewFiles]); // 파일 추가
        },
        maxFiles: 1, // 한 번에 하나의 파일만 허용
    });

    const removeFile = (fileName) => {
        setFiles(files.filter(file => file.file.name !== fileName)); // 특정 파일 제거
    };

    return (
        <div className='create-post-container'>
            <div className='file-upload-container'>
                {files.length === 0 ? ( // 파일이 없으면 드롭존 표시
                    <div {...getRootProps()} className="file-drop-zone">
                        <input {...getInputProps()} />
                        <p>파일을 선택하거나 여기에 드래그하세요.</p>
                        <p>이미지와 영상 파일만 지원됩니다.</p>
                    </div>
                ) : ( // 파일이 있으면 미리보기와 제거 버튼 표시
                    <div className="preview-container">
                        {files.map((file, index) => (
                            <div key={index} className="file-preview">
                                {file.file.type.startsWith('image/') ? (
                                    <img src={file.preview} alt={file.file.name} className="preview-image" />
                                ) : (
                                    <video src={file.preview} controls className="preview-video" />
                                )}
                                <p>{file.file.name}</p>
                                <button
                                    onClick={() => removeFile(file.file.name)}
                                    className="remove-file-button"
                                >
                                    제거
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <div className="bottomline"></div>
                <button className="save-button" disabled={files.length === 0}>저장</button>
            </div>
            <div className='file-content-container'>
                <div>
                    <p>제목</p>
                    <input type="text" className="postInput" placeholder="제목 추가" />
                </div>
                <div>
                    <p>설명</p>
                    <input type="text" className="postInput" placeholder="자세한 설명을 추가하세요." />
                </div>
                <div>
                    <p>링크</p>
                    <input type="text" className="postInput" placeholder="링크 추가" />
                </div>
                <div>
                    <p>보드</p>
                    <input type="text" className="postInput" placeholder="보드 선택" />
                </div>    
                <div>
                    <p>태그된 주제 -개</p>
                    <input type="text" className="postInput" placeholder="태그 검색" />
                    <p style={{ marginTop: "5px" }}>걱정하지 마세요. 사람들에게 태그는 보여지지 않습니다.</p>
                </div>
                <div>
                    <p>추가 옵션</p>
                </div>
                <p>
                    불법 촬영 콘텐츠 등을 게시하는 경우 For your page는 한국 전기통신사업법 제 22-5(1)조에 따라 
                    해당 콘텐츠의 액세스를 삭제하거나 차단할 수 있으며, 사용자는 관련 법률 및 규정에 따라 처벌을 받을 수 있습니다.
                </p>
            </div>
        </div>
    );
};

export default CreatePost;
