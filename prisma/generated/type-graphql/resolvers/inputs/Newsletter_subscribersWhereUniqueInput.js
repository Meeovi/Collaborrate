"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Newsletter_subscribersWhereUniqueInput = class Newsletter_subscribersWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Newsletter_subscribersWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersWhereUniqueInput.prototype, "email", void 0);
Newsletter_subscribersWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersWhereUniqueInput", {
        isAbstract: true
    })
], Newsletter_subscribersWhereUniqueInput);
exports.Newsletter_subscribersWhereUniqueInput = Newsletter_subscribersWhereUniqueInput;
