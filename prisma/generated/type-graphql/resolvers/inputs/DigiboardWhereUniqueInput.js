"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DigiboardWhereUniqueInput = class DigiboardWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DigiboardWhereUniqueInput.prototype, "id", void 0);
DigiboardWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DigiboardWhereUniqueInput", {
        isAbstract: true
    })
], DigiboardWhereUniqueInput);
exports.DigiboardWhereUniqueInput = DigiboardWhereUniqueInput;
