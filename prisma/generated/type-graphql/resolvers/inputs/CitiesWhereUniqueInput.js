"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CitiesWhereUniqueInput = class CitiesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CitiesWhereUniqueInput.prototype, "id", void 0);
CitiesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CitiesWhereUniqueInput", {
        isAbstract: true
    })
], CitiesWhereUniqueInput);
exports.CitiesWhereUniqueInput = CitiesWhereUniqueInput;
