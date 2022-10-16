"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMessagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesWhereInput_1 = require("../../../inputs/MessagesWhereInput");
let DeleteManyMessagesArgs = class DeleteManyMessagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesWhereInput_1.MessagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesWhereInput_1.MessagesWhereInput)
], DeleteManyMessagesArgs.prototype, "where", void 0);
DeleteManyMessagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMessagesArgs);
exports.DeleteManyMessagesArgs = DeleteManyMessagesArgs;
