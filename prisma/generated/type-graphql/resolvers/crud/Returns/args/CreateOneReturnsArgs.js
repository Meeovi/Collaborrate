"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneReturnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateInput_1 = require("../../../inputs/ReturnsCreateInput");
let CreateOneReturnsArgs = class CreateOneReturnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateInput_1.ReturnsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsCreateInput_1.ReturnsCreateInput)
], CreateOneReturnsArgs.prototype, "data", void 0);
CreateOneReturnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneReturnsArgs);
exports.CreateOneReturnsArgs = CreateOneReturnsArgs;
