import * as React from 'react';
import {IReduxAction, ReduxConnect} from '../../../utils/ReduxUtils';
import {UUID} from '../../../utils/UUID';
import {Button} from '../../button/Button';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ListBox} from '../../listBox/ListBox';
import {IModalExamplesProps} from '../../modal/examples/ModalCompositeConnectedExamples';
import {IModalActionPayload, openModal} from '../../modal/ModalActions';
import {ModalCompositeConnected} from '../../modal/ModalCompositeConnected';
import {Drop} from '../Drop';
import {DropPodPosition} from '../DropPod';

const modalId: string = 'ModalIDDrop';
const modalId2: string = 'ModalIDDrop2';

const mapDispatchToProps = (dispatch: (action: IReduxAction<IModalActionPayload>) => void): IModalExamplesProps => ({
    openModal: (id: string) => dispatch(openModal(id)),
});

@ReduxConnect(null, mapDispatchToProps)
export class DropExamples extends React.PureComponent<any> {

    openModal(id: string) {
        this.props.openModal(id);
    }

    render() {
        const triggerAlertFunction = () => {
            alert(`Alert function triggered`);
        };

        const defaultItems: IItemBoxProps[] = [
            {value: 'Add Digimon'},
            {value: 'Duplicate Meepo'},
            {value: 'Disable Dragon Ball', onOptionClick: () => triggerAlertFunction()},
            {value: 'Delete BitConnect'},
        ];

        const defaultItemsLongText: IItemBoxProps[] = [
            {value: 'Add Digimon'},
            {value: 'Duplicate Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo'},
        ];

        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Default drop</label>
                    <div className='form-control'>
                        <Drop
                            id={UUID.generate()}
                            selector={'#App'}
                            buttonContainerProps={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop with list position left</label>
                    <div className='form-control'>
                        <Drop
                            id={UUID.generate()}
                            selector={'#App'}
                            positions={[DropPodPosition.left, DropPodPosition.right]}
                            buttonContainerProps={{
                                className: 'right inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop with list position bottom</label>
                    <div className='form-control'>
                        <Drop
                            id={UUID.generate()}
                            selector={'#App'}
                            positions={[DropPodPosition.bottom, DropPodPosition.top]}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop with list position top</label>
                    <div className='form-control'>
                        <Drop
                            id={UUID.generate()}
                            selector={'#App'}
                            positions={[DropPodPosition.top, DropPodPosition.bottom]}
                            buttonContainerProps={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )}
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop: no position. no toolip</label>
                    <div className='form-control'>
                        <Drop
                            id={UUID.generate()}
                            selector={'#App'}
                            positions={[]}
                            buttonContainerProps={{
                                className: 'right inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop inside a modal</label>
                    <div className='form-control'>
                        <button className='btn' onClick={() => this.openModal(modalId)}>Open Modal</button>
                        <ModalCompositeConnected
                            id={modalId}
                            title='Modal composite'
                            classes={['mod-slide-in-bottom', 'mod-stick-bottom']}
                            modalBodyChildren={(
                                <Drop
                                    id={UUID.generate()}
                                    selector={'#App'}
                                    positions={[DropPodPosition.right, DropPodPosition.left, DropPodPosition.bottom]}
                                    buttonContainerProps={{
                                        className: 'inline-block',
                                    }}
                                    renderOpenButton={(onClick: () => void) => (
                                        <Button
                                            name={'Text'}
                                            enabled={true}
                                            onClick={() => onClick()}
                                        />
                                    )}
                                >
                                    <ListBox items={defaultItemsLongText} />
                                </Drop>

                            )}
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop inside a modal with a scroll</label>
                    <div className='form-control'>
                        <button className='btn' onClick={() => this.openModal(modalId2)}>Open Modal</button>
                        <ModalCompositeConnected
                            id={modalId2}
                            title='Modal composite'
                            classes={['mod-slide-in-bottom', 'mod-stick-bottom', 'mod-big']}
                            modalBodyChildren={(
                                <>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>
                                        <Drop
                                            id={UUID.generate()}
                                            selector={'#App'}
                                            positions={[DropPodPosition.bottom]}
                                            buttonContainerProps={{
                                                className: 'inline-block relative',
                                            }}
                                            renderOpenButton={(onClick: () => void) => (
                                                <Button
                                                    name={'Text'}
                                                    enabled={true}
                                                    onClick={() => onClick()}
                                                />
                                            )}
                                        >
                                            <ListBox items={defaultItemsLongText} />
                                        </Drop>
                                    </div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                    <div className='my5'>more...</div>
                                </>

                            )}
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                            modalFooterChildren={<div className={'mt5'}><button className='btn'>Do nothing</button></div>}
                        />
                    </div>
                </div>
            </div>
        );
    }
}