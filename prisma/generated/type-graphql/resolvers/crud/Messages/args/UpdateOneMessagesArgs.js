"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneMessagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesUpdateInput_1 = require("../../../inputs/MessagesUpdateInput");
const MessagesWhereUniqueInput_1 = require("../../../inputs/MessagesWhereUniqueInput");
let UpdateOneMessagesArgs = class UpdateOneMessagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesUpdateInput_1.MessagesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessagesUpdateInput_1.MessagesUpdateInput)
], UpdateOneMessagesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesWhereUniqueInput_1.MessagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessagesWhereUniqueInput_1.MessagesWhereUniqueInput)
], UpdateOneMessagesArgs.prototype, "where", void 0);
UpdateOneMessagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneMessagesArgs);
exports.UpdateOneMessagesArgs = UpdateOneMessagesArgs;
