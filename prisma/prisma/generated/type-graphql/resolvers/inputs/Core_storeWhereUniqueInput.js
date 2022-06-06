"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Core_storeWhereUniqueInput = class Core_storeWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Core_storeWhereUniqueInput.prototype, "id", void 0);
Core_storeWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Core_storeWhereUniqueInput", {
        isAbstract: true
    })
], Core_storeWhereUniqueInput);
exports.Core_storeWhereUniqueInput = Core_storeWhereUniqueInput;
