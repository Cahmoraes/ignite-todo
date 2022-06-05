import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'
import { DeleteCommentModal } from './DeleteCommentModal'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  function handleShowDeleteModal() {
    setIsModalDeleteOpen(!isModalDeleteOpen)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/cahmoraes.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caique Moraes</strong>
              <time
                title="11 de Maio às 08h13"
                dateTime="2022-05-22 08:11:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleShowDeleteModal} title="Deletar comentário">
              <Trash size={24} />
            </button>
            {isModalDeleteOpen && (
              <DeleteCommentModal
                onDeleteComment={handleDeleteComment}
                onToggleModal={handleShowDeleteModal}
              />
            )}
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}