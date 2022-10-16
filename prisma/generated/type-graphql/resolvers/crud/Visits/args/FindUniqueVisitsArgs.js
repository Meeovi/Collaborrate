"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVisitsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsWhereUniqueInput_1 = require("../../../inputs/VisitsWhereUniqueInput");
let FindUniqueVisitsArgs = class FindUniqueVisitsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsWhereUniqueInput_1.VisitsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisitsWhereUniqueInput_1.VisitsWhereUniqueInput)
], FindUniqueVisitsArgs.prototype, "where", void 0);
FindUniqueVisitsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueVisitsArgs);
exports.FindUniqueVisitsArgs = FindUniqueVisitsArgs;
