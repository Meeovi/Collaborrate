"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesWhereUniqueInput_1 = require("../../../inputs/WorkspacesWhereUniqueInput");
let FindUniqueWorkspacesArgs = class FindUniqueWorkspacesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput)
], FindUniqueWorkspacesArgs.prototype, "where", void 0);
FindUniqueWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueWorkspacesArgs);
exports.FindUniqueWorkspacesArgs = FindUniqueWorkspacesArgs;
