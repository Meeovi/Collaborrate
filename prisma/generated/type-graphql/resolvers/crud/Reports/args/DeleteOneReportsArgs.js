"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsWhereUniqueInput_1 = require("../../../inputs/ReportsWhereUniqueInput");
let DeleteOneReportsArgs = class DeleteOneReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereUniqueInput_1.ReportsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsWhereUniqueInput_1.ReportsWhereUniqueInput)
], DeleteOneReportsArgs.prototype, "where", void 0);
DeleteOneReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneReportsArgs);
exports.DeleteOneReportsArgs = DeleteOneReportsArgs;
