"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesWhereInput_1 = require("../../../inputs/WorkspacesWhereInput");
let DeleteManyWorkspacesArgs = class DeleteManyWorkspacesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereInput_1.WorkspacesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereInput_1.WorkspacesWhereInput)
], DeleteManyWorkspacesArgs.prototype, "where", void 0);
DeleteManyWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyWorkspacesArgs);
exports.DeleteManyWorkspacesArgs = DeleteManyWorkspacesArgs;
