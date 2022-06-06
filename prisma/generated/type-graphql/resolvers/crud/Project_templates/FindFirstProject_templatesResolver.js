"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProject_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstProject_templatesArgs_1 = require("./args/FindFirstProject_templatesArgs");
const Project_templates_1 = require("../../../models/Project_templates");
const helpers_1 = require("../../../helpers");
let FindFirstProject_templatesResolver = class FindFirstProject_templatesResolver {
    async findFirstProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_templates_1.Project_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProject_templatesArgs_1.FindFirstProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProject_templatesResolver.prototype, "findFirstProject_templates", null);
FindFirstProject_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_templates_1.Project_templates)
], FindFirstProject_templatesResolver);
exports.FindFirstProject_templatesResolver = FindFirstProject_templatesResolver;
