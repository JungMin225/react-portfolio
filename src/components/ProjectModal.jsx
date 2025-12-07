// src/components/ProjectModal.jsx
import React, { useEffect } from "react";

function ProjectModal({ project, onClose }) {
  // 모달 열렸을 때 배경 스크롤 잠금
  useEffect(() => {
    if (!project) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = prev || "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { name, program, summary, detail, url, media = [] } = project;

  const openSite = () => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* 상단 헤더(고정 느낌) */}
        <div className="project-modal-header">
          <div className="project-modal-header-text">
            <h3 id="project-modal-title" className="project-modal-title">
              {name}
            </h3>
            {program && <p className="project-modal-program">{program}</p>}
            {summary && <p className="project-modal-summary">{summary}</p>}
          </div>

          <button
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label="닫기"
          >
            ×
          </button>
        </div>

        {/* ⭐ 스크롤이 생기는 실제 영역 */}
        <div className="project-modal-scroll">
          {/* 상세 설명 */}
          {detail && <p className="project-modal-detail">{detail}</p>}

          {/* 미디어 렌더링 */}
          {media.length > 0 && (
            <div className="project-modal-media">
              {media.map((item, idx) => {
                // text
                if (item.type === "text") {
                  return (
                    <div key={idx} className="project-media-text">
                      {item.title && (
                        <h4 className="project-media-text-title">
                          {item.title}
                        </h4>
                      )}
                      {item.body && (
                        <p className="project-media-text-body">{item.body}</p>
                      )}
                    </div>
                  );
                }

                // image
                if (item.type === "image") {
                  return (
                    <figure key={idx} className="project-media-figure">
                      <img
                        src={item.src}
                        alt={item.alt ?? ""}
                        className="project-media-image"
                      />
                      {item.caption && (
                        <figcaption className="project-media-caption">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                // video
                if (item.type === "video") {
                  return (
                    <figure key={idx} className="project-media-figure">
                      <video
                        className="project-media-video"
                        controls
                        playsInline
                        preload="metadata"
                        poster={item.poster}
                      >
                        <source src={item.src} />
                        브라우저가 video 태그를 지원하지 않습니다.
                      </video>
                      {item.caption && (
                        <figcaption className="project-media-caption">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                return null;
              })}
            </div>
          )}

          {/* 하단 액션 */}
          <div className="project-modal-footer">

            <button
              type="button"
              className="project-btn project-btn--primary"
              onClick={openSite}
              disabled={!url}
            >
              웹사이트 열기 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
