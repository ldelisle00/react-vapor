(window.webpackJsonp=window.webpackJsonp||[]).push([[903],{1215:function(t,n,e){"use strict";e.r(n),n.default="## Guidelines\n\n### Content\n\n-   Only include information that is relevant to the performed action.\n\n-   Toasts may contain action buttons. Try to include no more than one action button besides the one to dismiss the Toast.\n\n### Behavior\n\n-   Only one Toast should be displayed at a time. If two consecutive Toasts have to be shown, the first one should be removed before the second one is shown.\n\n-   Toasts should not prevent users from interacting with page content. If preventing users from interacting with page content is unavoidable, consider using a [Prompt](#/components/ModalPrompt) instead.\n\n## Variations\n\nThe Toast type choice depends on the status of the operation to which the toast refers.\n\n| Type    | Purpose                                                                                                                                                                                                                                            |\n| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| Success | Used to confirm that an operation was successfully executed. If the Toast contains a link or action, it has to me manually dismissed by the user. If not, it is self-dismissible.                                                                  |\n| Warning | Used to notify users that the operation they have launched may not yet be completed, or may not have had the expected result. If the Toast contains a link or action, it has to me manually dismissed by the user. If not, it is self-dismissible. |\n| Error   | Used to notify users about an operation that was not successful. Users must interact with the Toast to dismiss it (i.e., it is not self-dismissible) to ensure they do not miss critical information.                                              |\n\n---\n\n## Related Components\n\n[Prompt](#/components/ModalPrompt)\n\n[Info Box](#/components/InfoBox)\n\n[Popover](#/components/Popover)\n\n[Tooltip](#/components/Tooltip)\n"}}]);
//# sourceMappingURL=903.bundle.js.map