"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesWhereUniqueInput_1 = require("../../../inputs/WorkspacesWhereUniqueInput");
let DeleteOneWorkspacesArgs = class DeleteOneWorkspacesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput)
], DeleteOneWorkspacesArgs.prototype, "where", void 0);
DeleteOneWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneWorkspacesArgs);
exports.DeleteOneWorkspacesArgs = DeleteOneWorkspacesArgs;
