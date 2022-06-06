"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateEmail_templatesArgs_1 = require("./args/AggregateEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const AggregateEmail_templates_1 = require("../../outputs/AggregateEmail_templates");
const helpers_1 = require("../../../helpers");
let AggregateEmail_templatesResolver = class AggregateEmail_templatesResolver {
    async aggregateEmail_templates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEmail_templates_1.AggregateEmail_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEmail_templatesArgs_1.AggregateEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateEmail_templatesResolver.prototype, "aggregateEmail_templates", null);
AggregateEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], AggregateEmail_templatesResolver);
exports.AggregateEmail_templatesResolver = AggregateEmail_templatesResolver;
