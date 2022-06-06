"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProject_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateProject_templatesArgs_1 = require("./args/UpdateProject_templatesArgs");
const Project_templates_1 = require("../../../models/Project_templates");
const helpers_1 = require("../../../helpers");
let UpdateProject_templatesResolver = class UpdateProject_templatesResolver {
    async updateProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_templates_1.Project_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProject_templatesArgs_1.UpdateProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateProject_templatesResolver.prototype, "updateProject_templates", null);
UpdateProject_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_templates_1.Project_templates)
], UpdateProject_templatesResolver);
exports.UpdateProject_templatesResolver = UpdateProject_templatesResolver;
