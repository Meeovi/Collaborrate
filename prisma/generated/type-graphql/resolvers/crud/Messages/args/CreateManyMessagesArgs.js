"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMessagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesCreateManyInput_1 = require("../../../inputs/MessagesCreateManyInput");
let CreateManyMessagesArgs = class CreateManyMessagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessagesCreateManyInput_1.MessagesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMessagesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyMessagesArgs.prototype, "skipDuplicates", void 0);
CreateManyMessagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMessagesArgs);
exports.CreateManyMessagesArgs = CreateManyMessagesArgs;
