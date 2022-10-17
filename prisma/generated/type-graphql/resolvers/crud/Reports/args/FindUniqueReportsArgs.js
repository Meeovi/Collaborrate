"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsWhereUniqueInput_1 = require("../../../inputs/ReportsWhereUniqueInput");
let FindUniqueReportsArgs = class FindUniqueReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereUniqueInput_1.ReportsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsWhereUniqueInput_1.ReportsWhereUniqueInput)
], FindUniqueReportsArgs.prototype, "where", void 0);
FindUniqueReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueReportsArgs);
exports.FindUniqueReportsArgs = FindUniqueReportsArgs;
