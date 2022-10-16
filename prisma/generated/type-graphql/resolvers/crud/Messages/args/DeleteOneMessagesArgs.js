"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneMessagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesWhereUniqueInput_1 = require("../../../inputs/MessagesWhereUniqueInput");
let DeleteOneMessagesArgs = class DeleteOneMessagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesWhereUniqueInput_1.MessagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessagesWhereUniqueInput_1.MessagesWhereUniqueInput)
], DeleteOneMessagesArgs.prototype, "where", void 0);
DeleteOneMessagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneMessagesArgs);
exports.DeleteOneMessagesArgs = DeleteOneMessagesArgs;
