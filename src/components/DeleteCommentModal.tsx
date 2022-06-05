import { useEffect, useRef } from 'react'
import styles from './DeleteCommentModal.module.css'

interface DeleteCommentModalProps {
  onDeleteComment: () => void
  onToggleModal: () => void
}

export function DeleteCommentModal({ onDeleteComment, onToggleModal }: DeleteCommentModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleOutsideClick(event: Event) {
      if(event.target === overlayRef.current) {
        window.removeEventListener('click', handleOutsideClick)
        onToggleModal()
      }
    }

    window.addEventListener('click', handleOutsideClick)

    return () => window.removeEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div ref={overlayRef} className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Excluir comentário</h3>
        </div>
        <p>Você tem certeza que gostaria de excluir este comentário?</p>
        <div className={styles.footer}>
          <button
            onClick={onToggleModal}
          >
            Cancelar
          </button>
          <button
            className={styles.deleteButton}
            onClick={onDeleteComment}
          >
            Sim, excluir
          </button>
        </div>
      </div>
    </div>
  )
}