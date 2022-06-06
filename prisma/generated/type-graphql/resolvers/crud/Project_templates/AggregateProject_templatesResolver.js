"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProject_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProject_templatesArgs_1 = require("./args/AggregateProject_templatesArgs");
const Project_templates_1 = require("../../../models/Project_templates");
const AggregateProject_templates_1 = require("../../outputs/AggregateProject_templates");
const helpers_1 = require("../../../helpers");
let AggregateProject_templatesResolver = class AggregateProject_templatesResolver {
    async aggregateProject_templates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProject_templates_1.AggregateProject_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProject_templatesArgs_1.AggregateProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateProject_templatesResolver.prototype, "aggregateProject_templates", null);
AggregateProject_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_templates_1.Project_templates)
], AggregateProject_templatesResolver);
exports.AggregateProject_templatesResolver = AggregateProject_templatesResolver;
