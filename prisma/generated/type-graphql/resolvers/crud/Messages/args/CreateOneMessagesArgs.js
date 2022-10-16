"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneMessagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesCreateInput_1 = require("../../../inputs/MessagesCreateInput");
let CreateOneMessagesArgs = class CreateOneMessagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesCreateInput_1.MessagesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessagesCreateInput_1.MessagesCreateInput)
], CreateOneMessagesArgs.prototype, "data", void 0);
CreateOneMessagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneMessagesArgs);
exports.CreateOneMessagesArgs = CreateOneMessagesArgs;
