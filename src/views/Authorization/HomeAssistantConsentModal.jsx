import { Typography } from '@mui/joy'
import { useTranslation } from 'react-i18next'

import ModalActions from '../../components/common/ModalActions'
import { useResponsiveModal } from '../../hooks/useResponsiveModal'

const HomeAssistantConsentModal = ({ loading, onClose, onConfirm, open }) => {
  const { t } = useTranslation('auth')
  const { ResponsiveModal } = useResponsiveModal()

  return (
    <ResponsiveModal
      open={open}
      onClose={onClose}
      size='md'
      title={t('haConsentModal.title')}
      closeOnBackdrop={!loading}
      closeOnEscape={!loading}
      footer={
        <ModalActions
          secondary={{
            label: t('common:cancel'),
            onClick: onClose,
            disabled: loading,
          }}
          primary={{
            label: t('haConsentModal.confirm'),
            onClick: onConfirm,
            loading,
          }}
        />
      }
    >
      <Typography level='body-sm' sx={{ color: 'text.secondary' }}>
        {t('haConsentModal.body')}
      </Typography>
    </ResponsiveModal>
  )
}

export default HomeAssistantConsentModal
