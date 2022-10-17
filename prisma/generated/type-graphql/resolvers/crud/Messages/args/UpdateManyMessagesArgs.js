"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMessagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesUpdateManyMutationInput_1 = require("../../../inputs/MessagesUpdateManyMutationInput");
const MessagesWhereInput_1 = require("../../../inputs/MessagesWhereInput");
let UpdateManyMessagesArgs = class UpdateManyMessagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesUpdateManyMutationInput_1.MessagesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessagesUpdateManyMutationInput_1.MessagesUpdateManyMutationInput)
], UpdateManyMessagesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesWhereInput_1.MessagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesWhereInput_1.MessagesWhereInput)
], UpdateManyMessagesArgs.prototype, "where", void 0);
UpdateManyMessagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMessagesArgs);
exports.UpdateManyMessagesArgs = UpdateManyMessagesArgs;
