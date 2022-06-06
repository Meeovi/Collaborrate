"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customers_1 = require("../../../models/Customers");
const Newsletter_subscribers_1 = require("../../../models/Newsletter_subscribers");
const helpers_1 = require("../../../helpers");
let Newsletter_subscribersRelationsResolver = class Newsletter_subscribersRelationsResolver {
    async customers(newsletter_subscribers, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.findUnique({
            where: {
                id: newsletter_subscribers.id,
            },
        }).customers({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Newsletter_subscribers_1.Newsletter_subscribers, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersRelationsResolver.prototype, "customers", null);
Newsletter_subscribersRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletter_subscribers_1.Newsletter_subscribers)
], Newsletter_subscribersRelationsResolver);
exports.Newsletter_subscribersRelationsResolver = Newsletter_subscribersRelationsResolver;
