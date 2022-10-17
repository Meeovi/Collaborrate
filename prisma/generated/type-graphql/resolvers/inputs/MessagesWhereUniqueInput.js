"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MessagesWhereUniqueInput = class MessagesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MessagesWhereUniqueInput.prototype, "id", void 0);
MessagesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessagesWhereUniqueInput", {
        isAbstract: true
    })
], MessagesWhereUniqueInput);
exports.MessagesWhereUniqueInput = MessagesWhereUniqueInput;
